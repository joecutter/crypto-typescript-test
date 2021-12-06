import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "asset" })
  Asset: string;

  @Column({ name: "asset_long" })
  AssetLong: string;

  @Column({ name: "min_confirmation" })
  MinConfirmation: number;

  @Column({ name: "withdraw_tx_fee", type: "float" })
  WithdrawTxFee: number;

  @Column({ name: "withdraw_tx_fee_percent", type: "float" })
  WithdrawTxFeePercent: number;

  @Column({ name: "system_protocol" })
  SystemProtocol: string;

  @Column({ name: "is_active" })
  IsActive: boolean;

  @Column({ name: "info_message" })
  InfoMessage: string;

  @Column({ name: "maintenance_mode" })
  MaintenanceMode: boolean;

  @Column({ name: "maintenance_message" })
  MaintenanceMessage: string;

  @Column({ name: "format_prefix" })
  FormatPrefix: string;

  @Column({ name: "format_sufix" })
  FormatSufix: string;

  @Column({ name: "decimal_separator" })
  DecimalSeparator: string;

  @Column({ name: "thousand_separator" })
  ThousandSeparator: string;

  @Column({ name: "decimal_place" })
  DecimalPlaces: number;

  @Column({ name: "withdrawal_fee_schedule" })
  withdrawal_fee_schedule: string;
}
