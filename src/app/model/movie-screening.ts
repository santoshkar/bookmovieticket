export interface MovieScreening {
    movieScreeningId: string;
    movieTheatre: any;
    showBeginsOn: string;
    showEndsOn: string;
    screenNo: number;
    isPlayingInTheatre: boolean;
    screenIdAndTime: ScreenIdAndtime;
  }

  interface ScreenIdAndtime {
    screenId: string;
    time: string;
  }