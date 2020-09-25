import { Module } from '@nestjs/common';
import { SeguroIndividualPlanoModule } from './seguro-individual-plano/seguro-individual-plano.module';

@Module({
  imports: [SeguroIndividualPlanoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
