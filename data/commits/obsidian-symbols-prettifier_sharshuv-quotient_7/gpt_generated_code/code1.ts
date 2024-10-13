const characterMap: CharacterMap = Object.create(null);
characterMap['->'] = '→';
characterMap['<-'] = '←';
characterMap['<->'] = '↔';
characterMap['<=>'] = '⇔';
characterMap['<='] = '⇐';
characterMap['=>'] = '⇒';
characterMap['--'] = '–';
characterMap['!important'] = {
  transform: '!important',
  classes: 'symbols-prettifier-important',
  element: '<span class="symbols-prettifier-important">!important</span>',
};
characterMap['?unclear'] = {
  transform: '?unclear',
  classes: 'symbols-prettifier-unclear',
  element: '<span class="symbols-prettifier-unclear">?unclear</span>',
};