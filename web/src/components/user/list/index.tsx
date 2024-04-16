'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import * as S from './style';

export const ListUser = () => {
  const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) => {
    return { name, calories, fat, carbs, protein };
  };

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <S.TableContainer component={Paper}>
      <S.Table sx={{ minWidth: 650 }} aria-label="list user table">
        <S.TableHead>
          <S.TableRow>
            <S.TableCell>Dessert (100g serving)</S.TableCell>
            <S.TableCell align="right">Calories</S.TableCell>
            <S.TableCell align="right">Fat&nbsp;(g)</S.TableCell>
            <S.TableCell align="right">Carbs&nbsp;(g)</S.TableCell>
            <S.TableCell align="right">Protein&nbsp;(g)</S.TableCell>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {rows.map((row) => (
            <S.TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <S.TableCell component="th" scope="row">
                {row.name}
              </S.TableCell>
              <S.TableCell align="right">{row.calories}</S.TableCell>
              <S.TableCell align="right">{row.fat}</S.TableCell>
              <S.TableCell align="right">{row.carbs}</S.TableCell>
              <S.TableCell align="right">{row.protein}</S.TableCell>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.TableContainer>
  );
};
