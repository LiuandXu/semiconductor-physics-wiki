window.addEventListener("load", function () {
  mermaid.initialize({
    startOnLoad: false,
    theme: document.body.getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default",
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
    securityLevel: "loose",
    fontFamily: "Noto Sans SC, sans-serif"
  });

  // Render on page load
  mermaid.run();

  // Re-render on MkDocs instant navigation
  document$.subscribe(function () {
    mermaid.run();
  });

  // Re-render on theme toggle
  var observer = new MutationObserver(function () {
    var scheme = document.body.getAttribute("data-md-color-scheme");
    mermaid.initialize({
      startOnLoad: false,
      theme: scheme === "slate" ? "dark" : "default",
      flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
      securityLevel: "loose",
      fontFamily: "Noto Sans SC, sans-serif"
    });
    mermaid.run();
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
});
