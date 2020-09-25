import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

import { SeguroIndividualPlanoService } from './seguro-individual-plano.service';
import { RequisicaoSeguroIndividualPlanoDto } from './dto/requisicao-seguro-individual-plano.dto';

@Controller('SeguroIndividualPlano')
export class SeguroIndividualPlanoController {
  constructor(
    private seguroIndividualPlanoService: SeguroIndividualPlanoService,
  ) {}
  @Post()
  contratarSeguroIndividualPlano(
    @Body(ValidationPipe)
    requisicaoSeguroIndividualPlanoDto: RequisicaoSeguroIndividualPlanoDto,
  ): RequisicaoSeguroIndividualPlanoDto {
    return requisicaoSeguroIndividualPlanoDto;
  }
}
