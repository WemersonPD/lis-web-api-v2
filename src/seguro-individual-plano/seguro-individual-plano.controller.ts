import { Body, Controller, Headers, Post, UseGuards, ValidationPipe } from '@nestjs/common';

import { SeguroIndividualPlanoService } from './seguro-individual-plano.service';
import { RequisicaoSeguroIndividualPlanoDto } from './dto/requisicao-seguro-individual-plano.dto';

@Controller('SeguroIndividualPlano')
export class SeguroIndividualPlanoController {
  constructor(
    private seguroIndividualPlanoService: SeguroIndividualPlanoService,
  ) {}
  @Post()
  @UseGuards()
  contratarSeguroIndividualPlano(
    @Body(ValidationPipe)
    requisicaoSeguroIndividualPlanoDto: RequisicaoSeguroIndividualPlanoDto,
    @Headers('Authorization')
    authorization: string
  ): RequisicaoSeguroIndividualPlanoDto {
    console.log(authorization);
    return requisicaoSeguroIndividualPlanoDto;
  }
}
