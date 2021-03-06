MathJax.Hub.Config({
  imageFont: null,
  tex2jax: {
    inlineMath: [['$','$'],['\\(','\\)']],
    processEscapes: true,
  },
  styles: {
    ".MathJax .mo, .MathJax .mi": {
      color: "inherit ! important"
    }
  },
  TeX: {
    Macros: {
     ZZ: "\\Bold{Z}",
NN: "\\Bold{N}",
RR: "\\Bold{R}",
CC: "\\Bold{C}",
QQ: "\\Bold{Q}",
QQbar: "\\overline{\\QQ}",
GF: ["\\Bold{F}_{#1}",1],
Zp: ["\\ZZ_{#1}",1],
Qp: ["\\QQ_{#1}",1],
Zmod: ["\\ZZ/#1\\ZZ",1],
CDF: "\\Bold{C}",
CIF: "\\Bold{C}",
CLF: "\\Bold{C}",
RDF: "\\Bold{R}",
RIF: "\\Bold{I} \\Bold{R}",
RLF: "\\Bold{R}",
CFF: "\\Bold{CFF}",
Bold: ["\\mathbf{#1}",1]
    }
  }
});

// This path is a little funny because we have to load our local
// config file as '../mathjax_sage' in the theme conf.py
MathJax.Ajax.loadComplete("[MathJax]/config/../mathjax_sage.js")