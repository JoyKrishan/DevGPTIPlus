  const button = document.querySelector(
    'button[aria-label="カレンダーの色、予定の色"]'
  );

  const tabPanel = document.querySelector('div[role="tabpanel"]');
  const tabPanelSpan = tabPanel?.querySelector("span");

  const allExpandables = tabPanelSpan?.querySelectorAll("div[data-expandable]");
  const colorSection = allExpandables?.item(allExpandables.length - 1);
  const colorSectionTrigger = colorSection?.querySelector("button");

  // 色セクションを開く
  colorSectionTrigger?.click();

  const colorTrigger = colorSection?.querySelector(
    `div[id] > 
     div > 
     div:first-child >
     div >
     div[data-dragsource-ignore="true"] >
     div:last-child >
     div:last-child >
     div:first-child >
     span >
     button
    `
  ) as HTMLButtonElement | null | undefined;

  // 色ポップアップ表示ボタンのクリック
  colorTrigger?.click();

  const colorButtons = document.querySelectorAll(
    'div[data-color][role="menuitemradio"]'
  );

  // 最初の色を選択
  (colorButtons[0] as HTMLButtonElement).click();
