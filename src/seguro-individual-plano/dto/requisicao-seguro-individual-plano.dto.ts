import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, Length, ValidateNested } from 'class-validator';

import { SeguradoDto } from './segurado.dto';

class _Consignado {
  @IsOptional()
  Funcional?: number;

  @IsNotEmpty({
    message: ' Informe a matrícula/benefício do consignado'
  })
  Matricula: string;
}

class _Debito {
  @IsNotEmpty({
    message: ' Informe o número do banco de débito'
  })
  @Length(3, 3, {
    message: ' O número do banco de débito deve conter 3 caracteres'
  })
  Banco: string;
  
  @IsNotEmpty({
    message: ' Informe o código da agência de débito'
  })
  @Length(4, 4, {
    message: ' O código da agência de débito deve conter 4 caracteres'
  })
  Agencia: string;
  
  @IsOptional()
  DigitoVerificadorAgencia?: string;

  @IsNotEmpty({
    message: ' Informe o número da conta de débito'
  })
  @Length(4, 4, {
    message: ' O número da conta de débito deve conter 4 caracteres'
  })
  Conta: string;

  @IsNotEmpty({
    message: ' Informe o digito verificador da conta de débito'
  })
  @Length(1, 2, {
    message: ' O digito verificador da conta de débito deve conter 1 ou 2 caracteres'
  })
  DigitoVerificadorConta: string;
}

class _DPS {
  @IsOptional()
  Codigo: number;

  @IsOptional()
  Resposta: string;

  @IsOptional()
  Texto: string;
}

export class RequisicaoSeguroIndividualPlanoDto {
  @IsNotEmpty({
    message: 'Informe o código do produto',
  })
  Produto: number;

  @IsNotEmpty({
    message: 'Informe o código do plano',
  })
  Plano: number;

  @IsOptional()
  Capital?: number;

  @IsNotEmpty({
    message: 'Informe o código do corretor',
  })
  Corretor: number;

  @IsNotEmpty({
    message: 'Informe a data de início da vigência',
  })
  DataInicioVigencia: Date;

  @IsOptional()
  DataFimVigencia?: Date;

  @IsNotEmpty({
    message: 'Informe a frequência de emissão',
  })
  FrequenciaEmissao: number;

  @IsOptional()
  TipoVencimento?: number;

  @IsOptional()
  DiaVencimento?: number;

  @IsOptional()
  DiasUteisVencimento?: number;

  @IsNotEmpty({
    message: 'Informe os dados do segurado',
  })
  @ValidateNested()
  @Type(() => SeguradoDto)
  Segurado: SeguradoDto;

  @IsOptional()
  AtividadePrincipal?: number;

  @IsNotEmpty({
    message: 'Informe a forma de pagamento'
  })
  FormaPagamento: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => _Consignado)
  Consignado?: _Consignado;

  @IsOptional()
  @ValidateNested()
  @Type(() => _Debito)
  Debito?: _Debito;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @Type(() => _DPS)
  DPS?: _DPS[];

  @IsOptional()
  Origem?: number;
}
