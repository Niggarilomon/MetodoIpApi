import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 } from 'uuid'
import { User } from './user.entity'

@Entity({ name: 'question' })
// @Unique('unique_question_text', ['user', 'text'])
export class Question extends BaseEntity {
  @PrimaryColumn('uuid')
  id: String

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  tema: string

  @Column()
  dateTime: string

  @Column()
  text: string

  @Column({ nullable: true })
  resposta: string

  @Column({ default: false })
  selected: boolean

  @Column({ default: false })
  selectedToPablo: boolean

  @Column({ default: false })
  is_active: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @BeforeInsert()
  addId() {
    this.id = v4()
  }
}
