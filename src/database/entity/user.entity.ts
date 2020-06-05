import bcrypt from 'bcrypt'
import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 } from 'uuid'

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryColumn('uuid')
  id: String

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column({ default: 0 })
  rate: number

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column({ default: true })
  is_active: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @BeforeInsert()
  addId() {
    this.id = v4()
  }

  @BeforeInsert()
  async setPassword() {
    const password_hash = await bcrypt.hash(this.password, 10)
    this.password = password_hash
  }
}
