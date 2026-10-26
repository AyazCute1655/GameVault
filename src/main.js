const submitBtn = document.getElementById('submitComment');
const authorInput = document.getElementById('author');
const textInput = document.getElementById('commentText');
const list = document.querySelector('.comment-list');

if (submitBtn && authorInput && textInput && list) {
  submitBtn.addEventListener('click', () => {
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
    authorInput.value = '';
    textInput.value = '';
  });
}
