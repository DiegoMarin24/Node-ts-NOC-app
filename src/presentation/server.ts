import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
);

const emailService = new EmailService();

export class Server {

    public static start() {
        console.log('Server started...');

        //TODO: Enviar email

        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     ['diegoamarin2498@gmail.com']
        // )
        
        // emailService.sendEmailWithFileSystemLogs(
        //     ['diegoamarin2498@gmail.com']
        // );

        // console.log(envs.MAILER_SECRET_KEY, envs.MAILER_EMAIL);

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';    
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${ url } is ok`),
        //             error => console.log(error),
        //         ).execute( url );
        //         // new CheckService().execute('http://localhost:3000');

        //     }
        // );
        
    }

}