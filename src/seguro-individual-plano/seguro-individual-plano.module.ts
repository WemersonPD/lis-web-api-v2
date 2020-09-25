import { Module } from '@nestjs/common';
import { SeguroIndividualPlanoService } from './seguro-individual-plano.service';
import { SeguroIndividualPlanoController } from './seguro-individual-plano.controller';

@Module({
  providers: [SeguroIndividualPlanoService],
  controllers: [SeguroIndividualPlanoController],
})
export class SeguroIndividualPlanoModule {}
