enum Base {
  OFF = 0,
  ON = 1
}

interface Enum {
  enable_to_full: Base;
  enable_to_half: Base;
  show_close_icon: Base;
}

const obj: Enum = {
  enable_to_full: 1,
  enable_to_half: 1,
  show_close_icon: 1
}