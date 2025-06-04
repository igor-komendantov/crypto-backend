import { Injectable } from '@nestjs/common';
import { CreateAlertDto } from './dto/create-alert.dto';

@Injectable()
export class AlertsService {
  create(alert: CreateAlertDto) {
    console.log('Новый алерт:', alert);
    return { status: 'ok' };
  }
}
