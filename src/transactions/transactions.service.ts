import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import axios from 'axios';

@Injectable()
export class TransactionsService {

  private apiKey = '1000.58aec1812c53118faaac77cb5da0042f.93684a891050144c7e6893bfbb8956b3';
  private apiUrl = 'https://sign.zoho.com/api/v1/';

  async uploadAndAddSignTags(pdfFilePath: string) {
    try {
      // Step 1: Upload the PDF
      const uploadResponse = await axios.post(`${this.apiUrl}documents`, {
        pdfFilePath,
        apiKey: this.apiKey,
        // Other necessary parameters for uploading
        // ...

      });

      const documentId = uploadResponse.data.documentId;

      // Step 2: Add Sign Tags to the uploaded PDF
      const addSignTagsResponse = await axios.post(`${this.apiUrl}documents/${documentId}/signTags`, {
        apiKey: this.apiKey,
        // Other necessary parameters for adding sign tags
        // ...

      });

      // Handle the responses as needed
      console.log('Upload Response:', uploadResponse.data);
      console.log('Add Sign Tags Response:', addSignTagsResponse.data);

      return 'PDF uploaded and sign tags added successfully.';
    } catch (error) {
      throw new Error(`Error: ${error.response.data}`);
    }
  }

  async initiateESignature(documentId: string, userEmail: string) {
    try {
      // Use Zoho Sign API to initiate e-signature for the specified document and user
      const initiateESignatureResponse = await axios.post(
        `${this.apiUrl}documents/${documentId}/actions/initiateSignature`,
        {
          apiKey: this.apiKey,
          recipients: [
            {
              email: userEmail,
              role: 'Signer',
              // Other recipient details as needed
            },
          ],
          // Other necessary parameters for initiating e-signature
          // ...

        }
      );

      // Handle the response as needed
      console.log('Initiate E-Signature Response:', initiateESignatureResponse.data);

      return `E-signature initiated successfully for ${userEmail}.`;
    } catch (error) {
      throw new Error(`Error: ${error.response.data}`);
    }
  }

  async getTemplates() {
    try {
      const response = await axios.get(`${this.apiUrl}templates`, {
        headers: {
          Authorization: `apikey ${this.apiKey}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Error: ${error.response.data}`);
    }
  }

  create(createTransactionDto: CreateTransactionDto) {
    return 'This action adds a new transaction';
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
