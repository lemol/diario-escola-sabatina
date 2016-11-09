
import type { Action } from '../actions/types';
//import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';

//export type State = {
    //drawerState: string
//}

const initialState = {
  hoje: {
    dia: 2
  },
  semana: {
    licao: 3
  },
  licoes: {
    3: {
      versoAureo: {
        texto: 'Não veio sobre vós tentação se não humana, ' +
               'mas fiel é Deus que nunca vos deixará tentar ' +
               'mais do que podeis, antes com a tentação ' +
               'dará também o escape para que possais suportar.',
        cita: '1 Co 10:13',
      },
      dias: {
        1: {
          data: '21',
          tema: 'Teme Job a Deus debalde?',
          questoes: {
            1: 'Sera verdade?',
            2: 'Por que?'
          },
          tb: {
            1: 'Mat 2:1',
            2: 'Job 1:4'
          }
        },
        2: {
          data: '22',
          tema: 'A mulher de Job',
          questoes: {
            1: 'Sera esta mesmo?',
            2: 'Por isso assim e?'
          },
          tb: {
            1: 'Luc 2:1',
            2: 'Job 10:1'
          }
        },
        3: {
          data: '23',
          tema: 'O dilema',
          questoes: {
            1: 'Como dizer isso?',
            2: 'Vamos ver isso ja.'
          },
          tb: {
            1: 'Luc 2:1',
            2: 'Job 10:1'
          }
        }
      }
    },
    4: {
      versoAureo: {
        texto: `
        Temei a Deus e dai-lhe gloria, pois é chegada a hora
        do seu juizo.
               `,
        cita: 'Rev 14:7'
      },
      dias: {
        1: {
          tema: 'Breve Jesus voltara',
          questoes: {
            1: 'Sera verdade?',
            2: 'Por que?'
          },
          tb: {
            1: 'Mat 2:1',
            2: 'Job 1:4'
          }
        },
        2: {
          tema: 'Jesus e melhor do que tudo',
          questoes: {
            1: 'Sera esta mesmo?',
            2: 'Por isso assim e?'
          },
          tb: {
            1: 'Luc 2:1',
            2: 'Job 10:1'
          }
        },
        3: {
          tema: 'O Rei vem vindo!',
          questoes: {
            1: 'Como dizer isso?',
            2: 'Vamos ver isso ja.'
          },
          tb: {
            1: 'Luc 2:1',
            2: 'Job 10:1'
          }
        }
      }
    }
  }
};

export default function (state = initialState, action:Action) {
  //if (action.type === OPEN_DRAWER) {
    //return {
      //...state,
      //drawerState: 'opened',
    //};
  //}

  //if (action.type === CLOSE_DRAWER) {
    //return {
      //...state,
      //drawerState: 'closed',
    //};
  //}
  return state;
}
