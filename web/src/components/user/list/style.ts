import styled from "@emotion/styled";
import {
  Container as ContainerMUI,
  TableContainer as TableContainerMUI,
  Table as TableMUI,
  TableHead as TableHeadMUI,
  TableRow as TableRowMUI,
  TableCell as TableCellMUI,
  TableBody as TableBodyMUI,
  Paper as PaperMUI,
  CircularProgress as CircularProgressMUI,
  Alert as AlertMUI,
} from "@mui/material";
import { TableContainerProps as TableContainerMUIProps } from "@mui/material/TableContainer";
import { TableCellProps as TableCellMUIProps } from "@mui/material/TableCell";

import EditIconMUI from '@mui/icons-material/Edit';
import DeleteIconMUI from '@mui/icons-material/Delete';
import CheckIconMUI from '@mui/icons-material/Check';

export const Container = styled(ContainerMUI)``;

export const TableContainer = styled(TableContainerMUI) <TableContainerMUIProps>``;

export const Table = styled(TableMUI)``;

export const TableHead = styled(TableHeadMUI)``;

export const TableRow = styled(TableRowMUI)``;

export const TableCell = styled(TableCellMUI) <TableCellMUIProps>``;

export const TableBody = styled(TableBodyMUI)``;

export const Paper = styled(PaperMUI)``;

export const CircularProgress = styled(CircularProgressMUI)``;

export const EditIcon = styled(EditIconMUI)`
  margin-right: 10px;
  cursor: pointer;
`;

export const DeleteIcon = styled(DeleteIconMUI)`
  cursor: pointer;
`;

export const ActionWrapper = styled.div`
  display: flex;
`;

export const Alert = styled(AlertMUI)`
  margin-bottom: 20px;
`;

export const CheckIcon = styled(CheckIconMUI)``;