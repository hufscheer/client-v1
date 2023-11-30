export function useScrollLock() {
  const scrollPosition = window.scrollY;

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
  };

  const enableScroll = () => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  };

  return { disableScroll, enableScroll };
}
