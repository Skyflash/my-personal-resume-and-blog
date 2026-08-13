(function () {
  var containers = document.querySelectorAll('[data-gh-user][data-gh-repo]');
  if (!containers.length) return;

  // The unauthenticated GitHub API only allows 60 requests/hour per IP: with
  // more visitors that runs out fast. Cache in localStorage for a few hours,
  // so repeat visits (or multiple pages with the same projects) don't call
  // the API every time.
  var CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

  function readCache(key) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return null;
      var cached = JSON.parse(raw);
      if (Date.now() - cached.time > CACHE_TTL_MS) return null;
      return cached.data;
    } catch (e) {
      return null;
    }
  }

  function writeCache(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify({ time: Date.now(), data: data }));
    } catch (e) {}
  }

  function render(el, data) {
    var stars = el.querySelector('[data-gh-stat="stars"]');
    var forks = el.querySelector('[data-gh-stat="forks"]');
    if (stars) stars.innerHTML = '<i class="fa fa-star" aria-hidden="true"></i>&nbsp;' + data.stargazers_count;
    if (forks) forks.innerHTML = '<i class="fa fa-code-fork" aria-hidden="true"></i>&nbsp;' + data.forks_count;
  }

  containers.forEach(function (el) {
    var user = el.getAttribute('data-gh-user');
    var repo = el.getAttribute('data-gh-repo');
    var cacheKey = 'gh-stats:' + user + '/' + repo;

    var cached = readCache(cacheKey);
    if (cached) {
      render(el, cached);
      return;
    }

    fetch('https://api.github.com/repos/' + user + '/' + repo)
      .then(function (res) {
        if (!res.ok) throw new Error('GitHub API error');
        return res.json();
      })
      .then(function (data) {
        var stats = { stargazers_count: data.stargazers_count, forks_count: data.forks_count };
        writeCache(cacheKey, stats);
        render(el, stats);
      })
      .catch(function () {
        // Rate limited or repo unreachable: just leave the placeholders as they are.
      });
  });
})();
