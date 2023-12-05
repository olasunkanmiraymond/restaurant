import { AuditParser } from '../audit/audit.parser';
import { IOrderNoteResponseDTO } from './dto/order-note-response';
import { OrderNote } from './order_note';

export class OrderNoteParser {
  static createResponse({ id, note, orderId, audit }: OrderNote): IOrderNoteResponseDTO {
    return { id, note, orderId, ...AuditParser.createAuditResponse(audit) };
  }

  static createOrderNotesResponse(orderNote: OrderNote[]): IOrderNoteResponseDTO[] {
    return orderNote.map((note) => {
      return this.createResponse(note);
    });
  }
}