document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more-button');

    readMoreButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const postContent = this.parentElement.querySelector('.post-content');

            if (postContent.style.display === 'none' || postContent.style.display === '') {
                postContent.style.display = 'block';
                button.textContent = 'Read less';
            } else {
                postContent.style.display = 'none';
                button.textContent = 'Read more';
            }
        });
    });
});


const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));


document.addEventListener("DOMContentLoaded", function () {
  const navigationLinks = document.querySelectorAll(".list a");
  const sections = document.querySelectorAll("section.blog-post");

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.getAttribute("data-target");

      // Hide all sections
      sections.forEach((section) => {
        section.style.display = "none";
      });

      if (target === "blog") {
        // Show all "Blog" sections
        sections.forEach((section) => {
          if (section.id.startsWith("blog")) {
            section.style.display = "block";
          }
        });
      } else {
        // Show the selected section
        const selectedSection = document.getElementById(target);
        selectedSection.style.display = "block";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const typingText = document.getElementById("typing-text");
  const textArray = ["I'm a Psychology Student", "from BS PSY 1-C", "bye."];
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textIndex].length) {
      typingText.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust the typing speed (in milliseconds)
    } else {
      setTimeout(erase, 1000); // Wait before erasing
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // Adjust the erasing speed (in milliseconds)
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(type, 500); // Wait before typing the next text
    }
  }

  type(); // Start the typing animation
});
