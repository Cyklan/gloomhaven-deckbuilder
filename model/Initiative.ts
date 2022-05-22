export enum InitiativeDetailLevel {
  NONE,
  LEVEL1,
  LEVEL2,
  LEVEL3,
  LEVEL4,
}

export interface Initiative {
  text: string;
  value: number;
}

export interface InitiativeGroup<T> {
  text: string;
  values: Array<T>;
}

export const Initiatives: Array<
  InitiativeGroup<InitiativeGroup<InitiativeGroup<Initiative>>>
> = [
  {
    text: "Fast",
    values: [
      {
        text: "Very Fast",
        values: [
          {
            text: "Really Very Fast",
            values: [
              {
                text: "Incredibly Really Very Fast",
                value: 1,
              },
              {
                text: "Extremely Really Very Fast",
                value: 2,
              },
              {
                text: "Really Very Fast",
                value: 3,
              },
              {
                text: "Barely Really Very Fast",
                value: 4,
              },
            ],
          },
          {
            text: "Very Fast",
            values: [
              {
                text: "Extremely Very Fast",
                value: 5,
              },
              {
                text: "Very Fast",
                value: 6,
              },
              {
                text: "Barely Very Fast",
                value: 7,
              },
            ],
          },
          {
            text: "Nearly Very Fast",
            values: [
              {
                text: "Incredibly Nearly Very Fast",
                value: 8,
              },
              {
                text: "Extremely Nearly Very Fast",
                value: 9,
              },
              {
                text: "Nearly Very Fast",
                value: 10,
              },
              {
                text: "Barely Nearly Very Fast",
                value: 11,
              },
            ],
          },
        ],
      },
      {
        text: "Fast",
        values: [
          {
            text: "Really Fast",
            values: [
              {
                text: "Incredibly Really Fast",
                value: 12,
              },
              {
                text: "Extremely Really Fast",
                value: 13,
              },
              {
                text: "Really Fast",
                value: 14,
              },
              {
                text: "Barely Really Fast",
                value: 15,
              },
            ],
          },
          {
            text: "Fast",
            values: [
              {
                text: "Extremely Fast",
                value: 16,
              },
              {
                text: "Fast",
                value: 17,
              },
              {
                text: "Barely Fast",
                value: 18,
              },
            ],
          },
          {
            text: "Nearly Fast",
            values: [
              {
                text: "Incredibly Nearly Fast",
                value: 19,
              },
              {
                text: "Extremely Nearly Fast",
                value: 20,
              },
              {
                text: "Nearly Fast",
                value: 21,
              },
              {
                text: "Barely Nearly Fast",
                value: 22,
              },
            ],
          },
        ],
      },
      {
        text: "Quick",
        values: [
          {
            text: "Really Quick",
            values: [
              {
                text: "Incredibly Really Quick",
                value: 23,
              },
              {
                text: "Extremely Really Quick",
                value: 24,
              },
              {
                text: "Really Quick",
                value: 25,
              },
              {
                text: "Barely Really Quick",
                value: 26,
              },
            ],
          },
          {
            text: "Quick",
            values: [
              {
                text: "Extremely Quick",
                value: 27,
              },
              {
                text: "Quick",
                value: 28,
              },
              {
                text: "Barely Quick",
                value: 29,
              },
            ],
          },
          {
            text: "Nearly Quick",
            values: [
              {
                text: "Incredibly Nearly Quick",
                value: 30,
              },
              {
                text: "Extremely Nearly Quick",
                value: 31,
              },
              {
                text: "Nearly Quick",
                value: 32,
              },
              {
                text: "Barely Nearly Quick",
                value: 33,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: "Average",
    values: [
      {
        text: "Nippy",
        values: [
          {
            text: "Really Nippy",
            values: [
              {
                text: "Incredibly Really Nippy",
                value: 34,
              },
              {
                text: "Extremely Really Nippy",
                value: 35,
              },
              {
                text: "Really Nippy",
                value: 36,
              },
              {
                text: "Barely Nearly Nippy",
                value: 37,
              },
            ],
          },
          {
            text: "Nippy",
            values: [
              {
                text: "Extremely Nippy",
                value: 38,
              },
              {
                text: "Nippy",
                value: 39,
              },
              {
                text: "Barely Nippy",
                value: 40,
              },
            ],
          },
          {
            text: "Nearly Nippy",
            values: [
              {
                text: "Incredibly Nearly Nippy",
                value: 41,
              },
              {
                text: "Extremely Nearly Nippy",
                value: 42,
              },
              {
                text: "Nearly Nippy",
                value: 43,
              },
              {
                text: "Barely Nearly Nippy",
                value: 44,
              },
            ],
          },
        ],
      },
      {
        text: "Average",
        values: [
          {
            text: "Above Average",
            values: [
              {
                text: "Incredibly Above Average",
                value: 45,
              },
              {
                text: "Extremely Above Average",
                value: 46,
              },
              {
                text: "Above Average",
                value: 47,
              },
              {
                text: "Barely Above Average",
                value: 48,
              },
            ],
          },
          {
            text: "Average",
            values: [
              {
                text: "Just Above Average",
                value: 49,
              },
              {
                text: "Average",
                value: 50,
              },
              {
                text: "Just Below Average",
                value: 51,
              },
            ],
          },
          {
            text: "Below Average",
            values: [
              {
                text: "Barely Below Average",
                value: 52,
              },
              {
                text: "Below Average",
                value: 53,
              },
              {
                text: "Extremely Below Average",
                value: 54,
              },
              {
                text: "Incredibly Below Average",
                value: 55,
              },
            ],
          },
        ],
      },
      {
        text: "Leisurely",
        values: [
          {
            text: "Nearly Leisurely",
            values: [
              {
                text: "Barely Nearly Leisurely",
                value: 56,
              },
              {
                text: "Nearly Leisurely",
                value: 57,
              },
              {
                text: "Extremely Nearly Leisurely",
                value: 58,
              },
              {
                text: "Incredibly Nearly Leisurely",
                value: 59,
              },
            ],
          },
          {
            text: "Leisurely",
            values: [
              {
                text: "Extremely Leisurely",
                value: 60,
              },
              {
                text: "Leisurely",
                value: 61,
              },
              {
                text: "Barely Leisurely",
                value: 62,
              },
            ],
          },
          {
            text: "Really Leisurely",
            values: [
              {
                text: "Barely Really Leisurely",
                value: 63,
              },
              {
                text: "Really Leisurely",
                value: 64,
              },
              {
                text: "Extremely Really Leisurely",
                value: 65,
              },
              {
                text: "Incredibly Really Leisurely",
                value: 66,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: "Slow",
    values: [
      {
        text: "Sluggish",
        values: [
          {
            text: "Nearly Sluggish",
            values: [
              {
                text: "Barely Nearly Sluggish",
                value: 67,
              },
              {
                text: "Nearly Sluggish",
                value: 68,
              },
              {
                text: "Extremely Nearly Sluggish",
                value: 69,
              },
              {
                text: "Incredibly Nearly Sluggish",
                value: 70,
              },
            ],
          },
          {
            text: "Sluggish",
            values: [
              {
                text: "Barely Sluggish",
                value: 71,
              },
              {
                text: "Sluggish",
                value: 72,
              },
              {
                text: "Extremely Sluggish",
                value: 73,
              },
            ],
          },
          {
            text: "Really Sluggish",
            values: [
              {
                text: "Barely Really Sluggish",
                value: 74,
              },
              {
                text: "Really Sluggish",
                value: 75,
              },
              {
                text: "Extremely Really Sluggish",
                value: 76,
              },
              {
                text: "Incredibly Really Sluggish",
                value: 77,
              },
            ],
          },
        ],
      },
      {
        text: "Slow",
        values: [
          {
            text: "Nearly Slow",
            values: [
              {
                text: "Barely Nearly Slow",
                value: 78,
              },
              {
                text: "Nearly Slow",
                value: 79,
              },
              {
                text: "Extremely Nearly Slow",
                value: 80,
              },
              {
                text: "Incredibly Nearly Slow",
                value: 81,
              },
            ],
          },
          {
            text: "Slow",
            values: [
              {
                text: "Barely Slow",
                value: 82,
              },
              {
                text: "Slow",
                value: 83,
              },
              {
                text: "Extremely Slow",
                value: 84,
              },
            ],
          },
          {
            text: "Really Slow",
            values: [
              {
                text: "Barely Really Slow",
                value: 85,
              },
              {
                text: "Really Slow",
                value: 86,
              },
              {
                text: "Extremely Really Slow",
                value: 87,
              },
              {
                text: "Incredibly Really Slow",
                value: 88,
              },
            ],
          },
        ],
      },
      {
        text: "Very Slow",
        values: [
          {
            text: "Nearly Very Slow",
            values: [
              {
                text: "Barely Nearly Very Slow",
                value: 89,
              },
              {
                text: "Nearly Very Slow",
                value: 90,
              },
              {
                text: "Extremely Nearly Very Slow",
                value: 91,
              },
              {
                text: "Incredibly Nearly Very Slow",
                value: 92,
              },
            ],
          },
          {
            text: "Very Slow",
            values: [
              {
                text: "Barely Very Slow",
                value: 93,
              },
              {
                text: "Very Slow",
                value: 94,
              },
              {
                text: "Extremely Very Slow",
                value: 95,
              },
            ],
          },
          {
            text: "Really Very Slow",
            values: [
              {
                text: "Nearly Really Very Slow",
                value: 96,
              },
              {
                text: "Really Very Slow",
                value: 97,
              },
              {
                text: "Extremely Really Very Slow",
                value: 98,
              },
              {
                text: "Incredibly Really Very Slow",
                value: 99,
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getInitiativeText(
  initative: number,
  level: InitiativeDetailLevel
): string {
  let text: string = "";
  if (level === InitiativeDetailLevel.NONE) return text;

  Initiatives.forEach((level1) => {
    if (text) return;

    level1.values.forEach((level2) => {
      if (text) return;

      level2.values.forEach((level3) => {
        if (text) return;

        level3.values.forEach((level4) => {
          if (level4.value === initative) {
            switch (level) {
              case InitiativeDetailLevel.LEVEL1:
                text = level1.text;
                break;
              case InitiativeDetailLevel.LEVEL2:
                text = level2.text;
                break;
              case InitiativeDetailLevel.LEVEL3:
                text = level3.text;
                break;
              default:
                text = level4.text;
                break;
            }

            return;
          }
        });
      });
    });
  });

  return text;
}
