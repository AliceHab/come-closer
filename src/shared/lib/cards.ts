// src/entities/Card/model/data.ts

import { CardT } from './types'

export const cards: CardT[] = [
  {
    id: 1,
    theme: 'детство',
    question: 'Как вы проводили лето в детстве?',
  },
  {
    id: 2,
    theme: 'детство',
    question:
      'Какой запах или вкус мгновенно возвращает вас в детство?',
  },
  {
    id: 3,
    theme: 'отношения',
    question: 'Что для вас значит по-настоящему близкий человек?',
  },
  {
    id: 4,
    theme: 'отношения',
    question: 'Когда вы чувствовали себя по-настоящему любимым?',
  },
  {
    id: 5,
    theme: 'деньги',
    question: 'Что для вас означает финансовая свобода?',
  },
  {
    id: 6,
    theme: 'деньги',
    question: 'На что вы никогда не пожалеете денег?',
  },
  {
    id: 7,
    theme: 'секс',
    question: 'Что помогает вам чувствовать себя желанным?',
  },
  {
    id: 8,
    theme: 'секс',
    question: 'Что для вас важно в интимной близости?',
  },
  {
    id: 9,
    theme: 'мнение',
    question: 'Какое убеждение вы изменили за последний год?',
  },
  {
    id: 10,
    theme: 'мнение',
    question: 'Вы чаще молчите или делитесь мнением?',
  },
  {
    id: 11,
    theme: 'действие',
    question: 'Когда вы в последний раз выходили из зоны комфорта?',
  },
  {
    id: 12,
    theme: 'действие',
    question: 'Какое действие вы давно откладываете и почему?',
  },
  {
    id: 13,
    theme: 'детство',
    question: 'Какое детское желание вы бы хотели исполнить сейчас?',
  },
  {
    id: 14,
    theme: 'отношения',
    question: 'Что вы считаете самой сильной стороной в отношениях?',
  },
  {
    id: 15,
    theme: 'деньги',
    question: 'Что вы узнали о деньгах с возрастом?',
  },
  {
    id: 16,
    theme: 'секс',
    question: 'Как вы думаете, нужно ли говорить о сексе открыто?',
  },
  {
    id: 17,
    theme: 'мнение',
    question: 'Какое ваше мнение чаще всего не принимают окружающие?',
  },
  {
    id: 18,
    theme: 'действие',
    question: 'Какое действие изменило вашу жизнь?',
  },
]

export function shuffleWithThemeLimit(
  cards: CardT[],
  maxSameTheme = 3,
): CardT[] {
  const maxAttempts = 1000
  let attempts = 0

  while (attempts < maxAttempts) {
    const shuffled = [...cards].sort(() => Math.random() - 0.5)
    let isValid = true

    for (let i = 0; i < shuffled.length - maxSameTheme; i++) {
      const group = shuffled.slice(i, i + maxSameTheme + 1)
      const allSame = group.every(
        (card) => card.theme === group[0].theme,
      )
      if (allSame) {
        isValid = false
        break
      }
    }

    if (isValid) return shuffled
    attempts++
  }

  console.warn(
    'Failed to shuffle cards without excessive theme repetition.',
  )
  return [...cards]
}
