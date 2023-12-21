export function calculateTotalLines(title: string, width: number = 13) {
  const maxWidth = Number(process.env.NEXT_PUBLIC_WIDTH) ?? width;
  const words = title.split(' ');
  let currentLine = '';
  let totalLines = 0;

  words.forEach((word, index) => {
    const space = index === 0 ? '' : ' '; // Add space between words (except the first word)

    if ((currentLine + space + word).length > maxWidth) {
      // If adding the next word exceeds the max width, start a new line
      totalLines += 1;
      currentLine = word;
    } else {
      currentLine = (currentLine + space + word).trim();
    }
  });

  // Count the last line if it's not empty
  if (currentLine.length > 0) {
    totalLines += 1;
  }

  return totalLines;
}

export function calculatePositionForTile(totalLine: number) {
  const currentVar = Number(process.env.NEXT_PUBLIC_APP_TITLE_TOP_POS) ?? 330;
  switch (totalLine) {
    /** top value from the canvas starting of the title */
    case 1:
      return currentVar + 40;

    case 2:
      return currentVar;

    case 3:
      return currentVar - 40;

    case 4:
      return currentVar - 80;

    case 5:
      return currentVar - 100;

    default:
      return currentVar + 50;
  }
  // switch (totalLine) {
  //   /** top value from the canvas starting of the title */
  //   case 1:
  //     return 370;

  //   case 2:
  //     return 330;

  //   case 3:
  //     return 290;

  //   case 4:
  //     return 250;

  //   default:
  //     return 370;
  // }
}

/**
 * 330: 13
 * 248: 11
 */
