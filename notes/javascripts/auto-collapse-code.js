window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const wrapper = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = '點我展開程式碼';
    wrapper.appendChild(summary);

    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
  });
});
