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
  FormControl as FormControlMUI,
  InputLabel as InputLabelMUI,
  Input as InputMUI,
  FormHelperText as FormHelperTextMUI,
  Button as ButtonMUI,
  ButtonGroup as ButtonGroupMUI,
} from "@mui/material";
import { TableContainerProps as TableContainerMUIProps } from "@mui/material/TableContainer";
import UndoIconMUI from '@mui/icons-material/Undo';
import SaveIconMUI from '@mui/icons-material/Save';

export const UndoIcon = styled(UndoIconMUI)``;

export const SaveIcon = styled(SaveIconMUI)``;

export const Button = styled(ButtonMUI)``;

export const ButtonGroup = styled(ButtonGroupMUI)``;

export const Footer = styled.div`
  position: fixed;
  bottom: 10px;
  width: 90%;
  text-align: center;
`;

export const Container = styled(ContainerMUI)``;

export const TableContainer = styled(TableContainerMUI) <TableContainerMUIProps>``;

export const Table = styled(TableMUI)``;

export const TableHead = styled(TableHeadMUI)``;

export const TableRow = styled(TableRowMUI)``;

export const TableCell = styled(TableCellMUI)``;

export const TableBody = styled(TableBodyMUI)``;

export const Paper = styled(PaperMUI)``;

export const FormWrapper = styled.div`
  margin-bottom: 10px;
`;

export const FormControl = styled(FormControlMUI)``;

export const InputLabel = styled(InputLabelMUI)``;

export const Input = styled(InputMUI)``;

export const FormHelperText = styled(FormHelperTextMUI)``;
