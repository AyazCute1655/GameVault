const commentForms = document.querySelectorAll('.comment-form');

const saveComments = () => {
  const comments = [];
  document.querySelectorAll('.comment').forEach((comment) => {
    const user = comment.querySelector('.user span')?.textContent || 'Anonim';
    const text = comment.querySelector('p')?.textContent || '';
    comments.push({ user, text });
  });

  localStorage.setItem('gamevault-comments', JSON.stringify(comments));
};

const loadComments = () => {
  const stored = localStorage.getItem('gamevault-comments');
  if (!stored) return;

  try {
    const items = JSON.parse(stored);
    if (!Array.isArray(items) || !items.length) return;

    const list = document.querySelector('.comment-list');
    if (!list) return;

    items.forEach((item) => {
      const existing = document.createElement('article');
      existing.className = 'comment';

      const initials = (item.user || 'A').charAt(0).toUpperCase();

      existing.innerHTML = `
        <div class="comment-top">
          <div class="user">
            <div class="avatar">${initials}</div>
            <span>${item.user || 'Anonim'}</span>
          </div>
          <time>az önce</time>
        </div>
        <p>${item.text}</p>
      `;

      list.appendChild(existing);
    });
  } catch (err) {
    console.error('Comment load error:', err);
  }
};

commentForms.forEach((form) => {
  const button = form.querySelector('button');
  const authorInput = form.querySelector('[data-field="author"]');
  const textInput = form.querySelector('[data-field="text"]');
  const list = document.querySelector('.comment-list');

  if (!button || !authorInput || !textInput || !list) return;

  button.addEventListener('click', () => {
    const author = authorInput.value.trim() || 'Anonim';
    const text = textInput.value.trim();

    if (!text) {
      alert('Lütfen yorum metnini yazın.');
      return;
    }

    const item = document.createElement('article');
    item.className = 'comment';

    const initials = author.charAt(0).toUpperCase();

    item.innerHTML = `
      <div class="comment-top">
        <div class="user">
          <div class="avatar">${initials}</div>
          <span>${author}</span>
        </div>
        <time>az önce</time>
      </div>
      <p>${text}</p>
    `;

    list.prepend(item);
    saveComments();
    authorInput.value = '';
    textInput.value = '';
  });
});

const menuButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

loadComments();
