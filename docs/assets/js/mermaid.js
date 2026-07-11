window.addEventListener("load", function () {
  mermaid.initialize({
    startOnLoad: false,
    theme: document.body.getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default",
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
    securityLevel: "loose",
    fontFamily: "Noto Sans SC, sans-serif"
  });

  function addZoomToMermaid() {
    var svgs = document.querySelectorAll(".mermaid svg");
    svgs.forEach(function (svg) {
      if (svg.dataset.zoomBound) return;
      svg.dataset.zoomBound = "true";

      // Add cursor pointer and hint
      var container = svg.closest(".mermaid");
      if (container && !container.dataset.zoomReady) {
        container.style.cssText = "cursor: pointer; position: relative; transition: box-shadow 0.2s; border-radius: 6px;";
        container.dataset.zoomReady = "true";
      }

      container.addEventListener("click", function (e) {
        if (e.target.closest(".mermaid-lightbox")) return;

        // Create lightbox
        var lb = document.createElement("div");
        lb.className = "mermaid-lightbox";
        lb.style.cssText =
          "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:10000;" +
          "display:flex;align-items:center;justify-content:center;cursor:zoom-out;" +
          "animation:mermaidFadeIn 0.2s ease;";

        var wrapper = document.createElement("div");
        wrapper.style.cssText =
          "max-width:95vw;max-height:95vh;overflow:auto;padding:2rem;" +
          "background:" + (document.body.getAttribute("data-md-color-scheme") === "slate" ? "#1e1e1e" : "#fff") + ";" +
          "border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,0.5);";

        var clone = svg.cloneNode(true);
        var containerClone = svg.closest(".mermaid").cloneNode(true);
        containerClone.style.cssText = "";
        containerClone.style.maxWidth = "100%";
        containerClone.innerHTML = "";
        var newSvg = clone.cloneNode(true);
        newSvg.style.cssText = "max-width:100%;height:auto;";
        containerClone.appendChild(newSvg);
        wrapper.appendChild(containerClone);
        lb.appendChild(wrapper);

        // Close on click
        lb.addEventListener("click", function () {
          lb.style.animation = "mermaidFadeOut 0.15s ease";
          setTimeout(function () { lb.remove(); }, 150);
        });

        document.body.appendChild(lb);
      });
    });
  }

  // Render on page load
  mermaid.run().then(addZoomToMermaid);

  // Re-render on MkDocs navigation
  document$.subscribe(function () {
    mermaid.run().then(addZoomToMermaid);
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
    mermaid.run().then(addZoomToMermaid);
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
});
