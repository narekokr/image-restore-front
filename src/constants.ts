export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
};

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

export enum ApiEndpoints {
  COLORIZE = '/image/colorize',
  INPAINT = '/image/inpaint',
  COLORIZE_INPAINT = '/image/colorize-and-inpaint',
}

export function getEndpoint(isFirstSelected: boolean, isSecondSelected: boolean): ApiEndpoints {
  if (isFirstSelected) {
    if (isSecondSelected) {
      return ApiEndpoints.COLORIZE_INPAINT;
    }
    return ApiEndpoints.COLORIZE;
  }
  return ApiEndpoints.INPAINT;
}
