document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.post').forEach(post => {
        const likeIcon = post.querySelector('.like-icon');
        const likeCountElem = post.querySelector('.like-count');
        const commentIcon = post.querySelector('.comment-icon');
        const commentSection = post.querySelector('.comment-section');

        let liked = false;
        let likeCount = parseInt(likeCountElem.textContent.split(' ')[0]);

        likeIcon.addEventListener('click', () => {
            liked = !liked;
            if (liked) {
                likeIcon.classList.remove('far');
                likeIcon.classList.add('fas');
                likeIcon.style.color = 'red';
                likeCount++;
            } else {
                likeIcon.classList.remove('fas');
                likeIcon.classList.add('far');
                likeIcon.style.color = '';
                likeCount--;
            }
            likeCountElem.textContent = `${likeCount} likes`;
        });

        commentIcon.addEventListener('click', () => {
            // Hide all other comment sections
            document.querySelectorAll('.comment-section').forEach(section => {
                if (section !== commentSection) {
                    section.classList.add('hidden');
                }
            });

            // Toggle the visibility of the clicked comment section
            commentSection.classList.toggle('hidden');
        });
    });
});
const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '😍', '🥰', '😋', '😎', '😜', '😐', '😶', '😏', '😌', '😔', '🤨', '😳', '😬', '🙄', '😪', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '😕', '😟', '🙁', '😮', '😯', '😲', '😳', '😦', '😧', '😨'];

const emojiContainer = document.getElementById('emoji-container');
const emojiButton = document.getElementById('emoji-button');

emojiButton.addEventListener('click', toggleEmojiContainer);

function toggleEmojiContainer() {
    if (emojiContainer.classList.contains('emoji-container')) {
        emojiContainer.classList.remove('emoji-container');
        emojiContainer.classList.add('show');
        emojiContainer.innerHTML = emojis.map(emoji => `<button>${emoji}</button>`).join('');
    } else {
        emojiContainer.classList.remove('show');
        emojiContainer.classList.add('emoji-container');
        emojiContainer.innerHTML = '';
    }
}

emojiContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        alert('You clicked on ' + event.target.textContent);
    }
});