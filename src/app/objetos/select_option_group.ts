import { select_option } from "./select_option";

export interface select_option_group {
    disabled?: boolean;
    name: string;
    select_option: select_option[];
  }