import { ExecException, exec as execSync } from 'child_process';

export interface ExecResponse {
	error: ExecException | null;
	stdout: string;
	stderr: string;
}

export function exec(command: string) {
	return new Promise<ExecResponse>((resolve) => {
		execSync(command, (error, stdout, stderr) => {
			resolve({ error, stderr, stdout });
		});
	});
}
