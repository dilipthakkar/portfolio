export const scrollAnimationFile = () => {
  /**
   * check that a element is in viewport or not
   * @param {HTMLElement} el  element to be checked
   * @param {number} percentageScroll let's value is 10 so if a element is 10% in viewport than from  bottom then it is visible
   * @returns true if element is in viewport false otherwise
   */
  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) *
        (percentageScroll / 100)
    );
  };

  /**
   * handle typing animation
   * @param {Array<HTMLElement>} typingTextElements all boxes of elemeents to which typing text element is applicable
   */
  const handleTypingTextScrollAnimation = (typingTextElements) => {
    typingTextElements.forEach((elementBlock) => {
      if (elementInView(elementBlock)) {
        if (!elementBlock.classList.contains("scrolled")) {
          animateTypingTextElement(elementBlock);
        }
      }
    });
  };

  const animateTypingTextElement = async (elementBlock) => {
    const spanBlocks = elementBlock.querySelectorAll("span");
    for (let i = 0; i < spanBlocks.length; i++) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 50);
      });
      spanBlocks[i].classList.remove("invisible-element");
      spanBlocks[i].classList.add("rubberband-blast");
    }
    elementBlock.classList.add("scrolled");
  };

  const typingTextElements = document.querySelectorAll(
    ".typing-text-animation"
  );
  typingTextElements.forEach((element) => {
    const spanBlocks = element.querySelectorAll("span");
    spanBlocks.forEach((element) => {
      element.classList.add("invisible-element");
    });
    element.classList.remove("invisible-element");
  });

  handleTypingTextScrollAnimation(typingTextElements);
  window.addEventListener("scroll", () => {
    handleTypingTextScrollAnimation(typingTextElements);
  });
};
