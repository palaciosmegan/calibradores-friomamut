// orientation: impar → int_*, par → ext_*
//   1–16  impar → INT  | par → EXT
//   17–32 impar → INT  | par → EXT
//   101 → ambiente | 102 → retorno | 103 → presión de palet | 104  → presión de ventilador | 105 → caudal

export type Orientation = 'EXT' | 'INT'

export type SensorMock = {
  posicion: number
  orientation: Orientation
  id: string
  valor: number
  habilitado: boolean
}

export const MOCK_SENSORES: Record<number, SensorMock[]> = {
  1: [
    { posicion: 1, orientation: 'INT', id: 'T01S01', valor: -18.4, habilitado: false },
    { posicion: 2, orientation: 'EXT', id: 'T01S02', valor: -19.1, habilitado: true },
    { posicion: 3, orientation: 'INT', id: 'T01S03', valor: -18.7, habilitado: true },
    { posicion: 4, orientation: 'EXT', id: 'T01S04', valor: -20.2, habilitado: true },
    { posicion: 5, orientation: 'INT', id: 'T01S05', valor: -47.9, habilitado: true },
    { posicion: 6, orientation: 'EXT', id: 'T01S06', valor: -19.5, habilitado: false },
    { posicion: 7, orientation: 'INT', id: 'T01S07', valor: -18.3, habilitado: true },
    { posicion: 8, orientation: 'EXT', id: 'T01S08', valor: -20.8, habilitado: true },
    { posicion: 17, orientation: 'INT', id: 'T01S09', valor: -21.3, habilitado: true },
    { posicion: 18, orientation: 'EXT', id: 'T01S10', valor: -20.1, habilitado: true },
    { posicion: 19, orientation: 'INT', id: 'T01S11', valor: -19.8, habilitado: true },
    { posicion: 20, orientation: 'EXT', id: 'T01S12', valor: 21.0, habilitado: false },
    { posicion: 21, orientation: 'INT', id: 'T01S13', valor: -18.6, habilitado: true },
    { posicion: 22, orientation: 'EXT', id: 'T01S14', valor: -20.4, habilitado: true },
    { posicion: 23, orientation: 'INT', id: 'T01S15', valor: -19.2, habilitado: true },
    { posicion: 32, orientation: 'EXT', id: 'T01S16', valor: 31.5, habilitado: true },
    { posicion: 101, orientation: 'EXT', id: 'A01', valor: 100, habilitado: true }, // ambiente
    { posicion: 102, orientation: 'EXT', id: 'A02', valor: 103, habilitado: true }, // retorno
    { posicion: 103, orientation: 'EXT', id: 'A03', valor: -800, habilitado: true }, // presión de palet
    { posicion: 104, orientation: 'EXT', id: 'A04', valor: -298, habilitado: true }, // presión de ventilador
    { posicion: 105, orientation: 'EXT', id: 'A05', valor: 201, habilitado: true }, // caudal
  ],
  2: [
    { posicion: 1, orientation: 'INT', id: 'T02S01', valor: -22.1, habilitado: true },
    { posicion: 2, orientation: 'EXT', id: 'T02S02', valor: -23.4, habilitado: true },
    { posicion: 3, orientation: 'INT', id: 'T02S03', valor: -22.8, habilitado: true },
    { posicion: 4, orientation: 'EXT', id: 'T02S04', valor: -23.9, habilitado: false },
    { posicion: 5, orientation: 'INT', id: 'T02S05', valor: -22.3, habilitado: true },
    { posicion: 6, orientation: 'EXT', id: 'T02S06', valor: -24.1, habilitado: true },
    { posicion: 7, orientation: 'INT', id: 'T02S07', valor: -23.0, habilitado: true },
    { posicion: 8, orientation: 'EXT', id: 'T02S08', valor: -22.6, habilitado: true },
    { posicion: 9, orientation: 'INT', id: 'T02S09', valor: -23.7, habilitado: true },
    { posicion: 10, orientation: 'EXT', id: 'T02S10', valor: -22.9, habilitado: true },
    { posicion: 17, orientation: 'INT', id: 'T02S11', valor: -24.3, habilitado: true },
    { posicion: 18, orientation: 'EXT', id: 'T02S12', valor: -23.1, habilitado: true },
    { posicion: 19, orientation: 'INT', id: 'T02S13', valor: -22.5, habilitado: false },
    { posicion: 20, orientation: 'EXT', id: 'T02S14', valor: -24.0, habilitado: true },
    { posicion: 21, orientation: 'INT', id: 'T02S15', valor: -23.6, habilitado: true },
    { posicion: 22, orientation: 'EXT', id: 'T02S16', valor: -22.2, habilitado: true },
    { posicion: 23, orientation: 'INT', id: 'T02S17', valor: -23.8, habilitado: true },
    { posicion: 24, orientation: 'EXT', id: 'T02S18', valor: -24.5, habilitado: true },
    { posicion: 25, orientation: 'INT', id: 'T02S19', valor: -22.7, habilitado: true },
    { posicion: 26, orientation: 'EXT', id: 'T02S20', valor: -23.3, habilitado: false },
    { posicion: 101, orientation: 'EXT', id: 'A01', valor: -21.5, habilitado: true },
    { posicion: 102, orientation: 'EXT', id: 'A02', valor: -21.5, habilitado: true },
  ],
  3: [
    { posicion: 1, orientation: 'INT', id: 'T03S01', valor: -15.2, habilitado: true },
    { posicion: 2, orientation: 'EXT', id: 'T03S02', valor: -16.0, habilitado: true },
    { posicion: 3, orientation: 'INT', id: 'T03S03', valor: -14.8, habilitado: true },
    { posicion: 4, orientation: 'EXT', id: 'T03S04', valor: -15.5, habilitado: true },
    { posicion: 5, orientation: 'INT', id: 'T03S05', valor: -16.3, habilitado: false },
    { posicion: 6, orientation: 'EXT', id: 'T03S06', valor: -15.1, habilitado: true },
    { posicion: 17, orientation: 'INT', id: 'T03S07', valor: -16.7, habilitado: true },
    { posicion: 18, orientation: 'EXT', id: 'T03S08', valor: -15.9, habilitado: true },
    { posicion: 19, orientation: 'INT', id: 'T03S09', valor: -14.6, habilitado: true },
    { posicion: 20, orientation: 'EXT', id: 'T03S10', valor: -16.1, habilitado: true },
    { posicion: 21, orientation: 'INT', id: 'T03S11', valor: -15.4, habilitado: false },
    { posicion: 22, orientation: 'EXT', id: 'T03S12', valor: -16.5, habilitado: true },
    { posicion: 101, orientation: 'EXT', id: 'A01', valor: -21.5, habilitado: true },
    { posicion: 102, orientation: 'EXT', id: 'A02', valor: -21.5, habilitado: true },
  ],
  4: [
    { posicion: 1, orientation: 'INT', id: 'T04S01', valor: -25.1, habilitado: true },
    { posicion: 2, orientation: 'EXT', id: 'T04S02', valor: -26.3, habilitado: true },
    { posicion: 3, orientation: 'INT', id: 'T04S03', valor: -25.8, habilitado: true },
    { posicion: 4, orientation: 'EXT', id: 'T04S04', valor: -26.0, habilitado: false },
    { posicion: 5, orientation: 'INT', id: 'T04S05', valor: -25.4, habilitado: true },
    { posicion: 6, orientation: 'EXT', id: 'T04S06', valor: -26.7, habilitado: true },
    { posicion: 7, orientation: 'INT', id: 'T04S07', valor: -25.2, habilitado: true },
    { posicion: 8, orientation: 'EXT', id: 'T04S08', valor: -26.9, habilitado: true },
    { posicion: 9, orientation: 'INT', id: 'T04S09', valor: -25.6, habilitado: false },
    { posicion: 10, orientation: 'EXT', id: 'T04S10', valor: -26.2, habilitado: true },
    { posicion: 11, orientation: 'INT', id: 'T04S11', valor: -25.9, habilitado: true },
    { posicion: 12, orientation: 'EXT', id: 'T04S12', valor: -26.5, habilitado: true },
    { posicion: 17, orientation: 'INT', id: 'T04S13', valor: -26.8, habilitado: true },
    { posicion: 18, orientation: 'EXT', id: 'T04S14', valor: -25.3, habilitado: true },
    { posicion: 19, orientation: 'INT', id: 'T04S15', valor: -26.1, habilitado: true },
    { posicion: 20, orientation: 'EXT', id: 'T04S16', valor: -25.7, habilitado: false },
    { posicion: 21, orientation: 'INT', id: 'T04S17', valor: -26.4, habilitado: true },
    { posicion: 22, orientation: 'EXT', id: 'T04S18', valor: -25.5, habilitado: true },
    { posicion: 23, orientation: 'INT', id: 'T04S19', valor: -26.6, habilitado: true },
    { posicion: 24, orientation: 'EXT', id: 'T04S20', valor: -25.0, habilitado: true },
    { posicion: 25, orientation: 'INT', id: 'T04S21', valor: -26.3, habilitado: false },
    { posicion: 26, orientation: 'EXT', id: 'T04S22', valor: -25.8, habilitado: true },
    { posicion: 27, orientation: 'INT', id: 'T04S23', valor: -26.0, habilitado: true },
    { posicion: 28, orientation: 'EXT', id: 'T04S24', valor: -25.4, habilitado: true },
    { posicion: 101, orientation: 'EXT', id: 'A01', valor: -21.5, habilitado: true },
    { posicion: 102, orientation: 'EXT', id: 'A02', valor: -21.5, habilitado: true },
  ],
  5: [],
}
