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
    { posicion: 1, orientation: 'INT', id: 'T01 S01', valor: -18.4, habilitado: false },
    { posicion: 2, orientation: 'EXT', id: 'T01 S02', valor: -19.1, habilitado: true },
    { posicion: 3, orientation: 'INT', id: 'T01 S03', valor: -18.7, habilitado: true },
    { posicion: 4, orientation: 'EXT', id: 'T01 S04', valor: -20.2, habilitado: true },
    { posicion: 5, orientation: 'INT', id: 'T01 S05', valor: -47.9, habilitado: true },
    { posicion: 6, orientation: 'EXT', id: 'T01 S06', valor: -19.5, habilitado: false },
    { posicion: 7, orientation: 'INT', id: 'T01 S07', valor: -18.3, habilitado: true },
    { posicion: 8, orientation: 'EXT', id: 'T01 S08', valor: -20.8, habilitado: true },
    { posicion: 17, orientation: 'INT', id: 'T01 S09', valor: -21.3, habilitado: true },
    { posicion: 18, orientation: 'EXT', id: 'T01 S10', valor: -20.1, habilitado: true },
    { posicion: 19, orientation: 'INT', id: 'T01 S11', valor: -19.8, habilitado: true },
    { posicion: 20, orientation: 'EXT', id: 'T01 S12', valor: 21.0, habilitado: false },
    { posicion: 21, orientation: 'INT', id: 'T01 S13', valor: -18.6, habilitado: true },
    { posicion: 22, orientation: 'EXT', id: 'T01 S14', valor: -20.4, habilitado: true },
    { posicion: 23, orientation: 'INT', id: 'T01 S15', valor: -19.2, habilitado: true },
    { posicion: 32, orientation: 'EXT', id: 'T01 S16', valor: 31.5, habilitado: true },
    { posicion: 101, orientation: 'EXT', id: 'A01', valor: 100, habilitado: true }, // ambiente
    { posicion: 102, orientation: 'EXT', id: 'A02', valor: 103, habilitado: true }, // retorno
    { posicion: 103, orientation: 'EXT', id: 'A03', valor: -800, habilitado: true }, // presión de palet
    { posicion: 104, orientation: 'EXT', id: 'A04', valor: -298, habilitado: true }, // presión de ventilador
    { posicion: 105, orientation: 'EXT', id: 'A05', valor: 201, habilitado: true }, // caudal
  ],
  2: [
    { posicion: 1, orientation: 'INT', id: 'T02 S01', valor: -22.1, habilitado: true },
    { posicion: 2, orientation: 'EXT', id: 'T02 S02', valor: -23.4, habilitado: true },
    { posicion: 3, orientation: 'INT', id: 'T02 S03', valor: -22.8, habilitado: true },
    { posicion: 4, orientation: 'EXT', id: 'T02 S04', valor: -23.9, habilitado: false },
    { posicion: 5, orientation: 'INT', id: 'T02 S05', valor: -22.3, habilitado: true },
    { posicion: 6, orientation: 'EXT', id: 'T02 S06', valor: -24.1, habilitado: true },
    { posicion: 7, orientation: 'INT', id: 'T02 S07', valor: -23.0, habilitado: true },
    { posicion: 8, orientation: 'EXT', id: 'T02 S08', valor: -22.6, habilitado: true },
    { posicion: 9, orientation: 'INT', id: 'T02 S09', valor: -23.7, habilitado: true },
    { posicion: 10, orientation: 'EXT', id: 'T02 S10', valor: -22.9, habilitado: true },
    { posicion: 17, orientation: 'INT', id: 'T02 S11', valor: -24.3, habilitado: true },
    { posicion: 18, orientation: 'EXT', id: 'T02 S12', valor: -23.1, habilitado: true },
    { posicion: 19, orientation: 'INT', id: 'T02 S13', valor: -22.5, habilitado: false },
    { posicion: 20, orientation: 'EXT', id: 'T02 S14', valor: -24.0, habilitado: true },
    { posicion: 21, orientation: 'INT', id: 'T02 S15', valor: -23.6, habilitado: true },
    { posicion: 22, orientation: 'EXT', id: 'T02 S16', valor: -22.2, habilitado: true },
    { posicion: 23, orientation: 'INT', id: 'T02 S17', valor: -23.8, habilitado: true },
    { posicion: 24, orientation: 'EXT', id: 'T02 S18', valor: -24.5, habilitado: true },
    { posicion: 25, orientation: 'INT', id: 'T02 S19', valor: -22.7, habilitado: true },
    { posicion: 26, orientation: 'EXT', id: 'T02 S20', valor: -23.3, habilitado: false },
    { posicion: 101, orientation: 'EXT', id: 'A01', valor: -21.5, habilitado: true },
    { posicion: 102, orientation: 'EXT', id: 'A02', valor: -21.5, habilitado: true },
  ],
  3: [
    { posicion: 1, orientation: 'INT', id: 'T03 S01', valor: -15.2, habilitado: true },
    { posicion: 2, orientation: 'EXT', id: 'T03 S02', valor: -16.0, habilitado: true },
    { posicion: 3, orientation: 'INT', id: 'T03 S03', valor: -14.8, habilitado: true },
    { posicion: 4, orientation: 'EXT', id: 'T03 S04', valor: -15.5, habilitado: true },
    { posicion: 5, orientation: 'INT', id: 'T03 S05', valor: -16.3, habilitado: false },
    { posicion: 6, orientation: 'EXT', id: 'T03 S06', valor: -15.1, habilitado: true },
    { posicion: 17, orientation: 'INT', id: 'T03 S07', valor: -16.7, habilitado: true },
    { posicion: 18, orientation: 'EXT', id: 'T03 S08', valor: -15.9, habilitado: true },
    { posicion: 19, orientation: 'INT', id: 'T03 S09', valor: -14.6, habilitado: true },
    { posicion: 20, orientation: 'EXT', id: 'T03 S10', valor: -16.1, habilitado: true },
    { posicion: 21, orientation: 'INT', id: 'T03 S11', valor: -15.4, habilitado: false },
    { posicion: 22, orientation: 'EXT', id: 'T03 S12', valor: -16.5, habilitado: true },
    { posicion: 101, orientation: 'EXT', id: 'A01', valor: -21.5, habilitado: true },
    { posicion: 102, orientation: 'EXT', id: 'A02', valor: -21.5, habilitado: true },
  ],
  4: [
    { posicion: 1, orientation: 'INT', id: 'T04 S01', valor: -25.1, habilitado: true },
    { posicion: 2, orientation: 'EXT', id: 'T04 S02', valor: -26.3, habilitado: true },
    { posicion: 3, orientation: 'INT', id: 'T04 S03', valor: -25.8, habilitado: true },
    { posicion: 4, orientation: 'EXT', id: 'T04 S04', valor: -26.0, habilitado: false },
    { posicion: 5, orientation: 'INT', id: 'T04 S05', valor: -25.4, habilitado: true },
    { posicion: 6, orientation: 'EXT', id: 'T04 S06', valor: -26.7, habilitado: true },
    { posicion: 7, orientation: 'INT', id: 'T04 S07', valor: -25.2, habilitado: true },
    { posicion: 8, orientation: 'EXT', id: 'T04 S08', valor: -26.9, habilitado: true },
    { posicion: 9, orientation: 'INT', id: 'T04 S09', valor: -25.6, habilitado: false },
    { posicion: 10, orientation: 'EXT', id: 'T04 S10', valor: -26.2, habilitado: true },
    { posicion: 11, orientation: 'INT', id: 'T04 S11', valor: -25.9, habilitado: true },
    { posicion: 12, orientation: 'EXT', id: 'T04 S12', valor: -26.5, habilitado: true },
    { posicion: 17, orientation: 'INT', id: 'T04 S13', valor: -26.8, habilitado: true },
    { posicion: 18, orientation: 'EXT', id: 'T04 S14', valor: -25.3, habilitado: true },
    { posicion: 19, orientation: 'INT', id: 'T04 S15', valor: -26.1, habilitado: true },
    { posicion: 20, orientation: 'EXT', id: 'T04 S16', valor: -25.7, habilitado: false },
    { posicion: 21, orientation: 'INT', id: 'T04 S17', valor: -26.4, habilitado: true },
    { posicion: 22, orientation: 'EXT', id: 'T04 S18', valor: -25.5, habilitado: true },
    { posicion: 23, orientation: 'INT', id: 'T04 S19', valor: -26.6, habilitado: true },
    { posicion: 24, orientation: 'EXT', id: 'T04 S20', valor: -25.0, habilitado: true },
    { posicion: 25, orientation: 'INT', id: 'T04 S21', valor: -26.3, habilitado: false },
    { posicion: 26, orientation: 'EXT', id: 'T04 S22', valor: -25.8, habilitado: true },
    { posicion: 27, orientation: 'INT', id: 'T04 S23', valor: -26.0, habilitado: true },
    { posicion: 28, orientation: 'EXT', id: 'T04 S24', valor: -25.4, habilitado: true },
    { posicion: 101, orientation: 'EXT', id: 'A01', valor: -21.5, habilitado: true },
    { posicion: 102, orientation: 'EXT', id: 'A02', valor: -21.5, habilitado: true },
  ],
  5: [],
}
