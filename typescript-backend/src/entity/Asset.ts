import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Asset {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  Asset!: string;
  @Column()
  AssetLong!: string;
  @Column()
  MinConfirmation!: number;
  @Column()
  WithdrawTxFee!: number;
  @Column()
  WithdrawTxFeePercent!: number;
  @Column()
  SystemProtocol!: string;
  @Column()
  IsActive!: boolean;
  @Column()
  InfoMessage!: string;
  @Column()
  MaintenanceMode!: boolean;
  @Column()
  MaintenanceMessage!: string;
  @Column()
  FormatPrefix!: string;
  @Column()
  FormatSufix!: string;
  @Column()
  DecimalSeparator!: string;
  @Column()
  ThousandSeparator!: string;
  @Column()
  DecimalPlaces!: 8;
  @Column()
  withdrawal_fee_schedule!: string;
}
