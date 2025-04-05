import { useEffect } from 'react';

export const useTelegram = () => {
  // Раскрываем WebApp на весь экран при загрузке
  //   useEffect(() => {
  //     if (window.Telegram?.WebApp?.expand) {
  //       window.Telegram.WebApp.expand();
  //     }
  //   }, []);

  // window.Telegram.WebApp.enableClosingConfirmation()

  // Функция для вибрации
  // const vibrate = (type = 'light') => {
  //   const allowedTypes = ['light', 'medium', 'heavy', 'rigid', 'soft'];
  //   if (
  //     window.Telegram?.WebApp?.HapticFeedback &&
  //     allowedTypes.includes(type)
  //   ) {
  //     window.Telegram.WebApp.HapticFeedback.impactOccurred(type);
  //   }
  // };

  return {
    webApp: window.Telegram?.WebApp || null,
    user: window.Telegram?.WebApp?.initDataUnsafe?.user,

    // FIXME: расскоменти в проде
    tlgid: window.Telegram?.WebApp?.initDataUnsafe?.user.id,
    // vibrate,
    vibrate: (type = 'light') => tg?.HapticFeedback?.impactOccurred(type),
  };
};
