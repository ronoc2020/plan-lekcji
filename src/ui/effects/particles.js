export function spawnFloatingText(text, { x, y, color = 'currentColor', duration = 900 } = {}) {
  const node = document.createElement('span');
  node.className = 'floating-reward';
  node.textContent = text;
  node.style.left = `${x}px`;
  node.style.top = `${y}px`;
  node.style.color = color;
  document.body.append(node);
  requestAnimationFrame(() => node.classList.add('floating-reward--visible'));
  setTimeout(() => node.remove(), duration);
}

export function spawnParticles(type, { target, count = 5 } = {}) {
  if (!target) return;
  const rect = target.getBoundingClientRect();
  for (let index = 0; index < count; index += 1) {
    const node = document.createElement('span');
    node.className = `particle particle--${type}`;
    node.textContent = type === 'heart' ? '💛' : type === 'zzz' ? '💤' : '✨';
    node.style.left = `${rect.left + rect.width / 2}px`;
    node.style.top = `${rect.top + rect.height / 2}px`;
    node.style.setProperty('--particle-delay', `${index * 60}ms`);
    document.body.append(node);
    setTimeout(() => node.remove(), 1100);
  }
}
