export const FirebaseServiceErrors = () => `export const errors = {
	// Auth
	'auth/wrong-password':
		'Senha incorreta. Verifique sua senha e tente novamente.',
	'auth/user-disabled':
		'O usuário associado à credencial fornecida foi desativado.',
	'auth/user-not-found': 'Não encontramos um usuário com este e-mail.',
	'auth/weak-password':
		'A senha fornecida é muito fraca. Escolha uma senha mais segura.',
	'auth/app-deleted':
		'O aplicativo foi excluído. Verifique a configuração do seu projeto.',
	'auth/expired-action-code':
		'O código ou link fornecido expirou. Solicite um novo.',
	'auth/invalid-action-code':
		'O código da ação é inválido. Verifique o link ou código e tente novamente.',
	'auth/email-already-in-use': 'Este e-mail já está associado a outra conta.',
	'auth/invalid-email': 'O endereço de e-mail fornecido não é válido.',
	'auth/operation-not-allowed':
		'Este tipo de conta ainda não está ativado para seu projeto.',
	'auth/account-exists-with-different-credential':
		'Este e-mail está associado a outra conta com credenciais diferentes.',
	'auth/auth-domain-config-required':
		'A configuração do domínio de autenticação é necessária.',
	'auth/credential-already-in-use': 'A credencial fornecida já está em uso.',
	'auth/operation-not-supported-in-this-environment':
		'Esta operação não é suportada neste ambiente. Verifique o uso de http ou https.',
	'auth/timeout':
		'O tempo de resposta foi excedido. Verifique se o domínio está autorizado.',
	'auth/missing-android-pkg-name':
		'O nome do pacote Android é necessário para a instalação do aplicativo.',
	'auth/missing-continue-uri':
		'A URL de continuação é necessária na solicitação.',
	'auth/missing-ios-bundle-id':
		'O identificador do pacote iOS é necessário para a instalação do aplicativo.',
	'auth/invalid-continue-uri': 'A URL de continuação fornecida é inválida.',
	'auth/unauthorized-continue-uri':
		'O domínio da URL de continuação não está autorizado.',
	'auth/invalid-dynamic-link-domain':
		'O domínio de link dinâmico fornecido não está autorizado ou configurado.',
	'auth/argument-error': 'Verifique a configuração do link do aplicativo.',
	'auth/invalid-persistence-type':
		'O tipo de persistência especificado é inválido.',
	'auth/unsupported-persistence-type':
		'O tipo de persistência especificado não é suportado neste ambiente.',
	'auth/invalid-credential': 'A credencial fornecida é inválida ou expirou.',
	'auth/invalid-verification-code':
		'O código de verificação fornecido é inválido.',
	'auth/invalid-verification-id': 'O ID de verificação fornecido é inválido.',
	'auth/custom-token-mismatch':
		'O token fornecido não corresponde ao esperado.',
	'auth/invalid-custom-token': 'O token personalizado fornecido é inválido.',
	'auth/captcha-check-failed':
		'O token de resposta do reCAPTCHA é inválido, expirou ou o domínio não é permitido.',
	'auth/invalid-phone-number':
		'O número de telefone fornecido está em um formato inválido (padrão E.164).',
	'auth/missing-phone-number': 'O número de telefone é obrigatório.',
	'auth/quota-exceeded': 'A cota de envio de SMS foi excedida.',
	'auth/cancelled-popup-request':
		'Apenas uma solicitação de janela pop-up é permitida por vez.',
	'auth/popup-blocked': 'A janela pop-up foi bloqueada pelo navegador.',
	'auth/popup-closed-by-user':
		'A janela pop-up foi fechada pelo usuário antes de concluir o login.',
	'auth/unauthorized-domain':
		'O domínio do aplicativo não está autorizado a realizar esta operação.',
	'auth/invalid-user-token': 'O usuário atual não foi identificado.',
	'auth/user-token-expired': 'O token do usuário atual expirou.',
	'auth/null-user': 'Não há um usuário atual.',
	'auth/app-not-authorized':
		'O aplicativo não está autorizado a autenticar com a chave fornecida.',
	'auth/invalid-api-key': 'A chave da API fornecida é inválida.',
	'auth/network-request-failed': 'Falha na conexão com a rede.',
	'auth/requires-recent-login':
		'O último login do usuário não atende ao requisito de segurança.',
	'auth/too-many-requests':
		'Muitas solicitações foram feitas. Tente novamente mais tarde.',
	'auth/web-storage-unsupported':
		'O navegador não suporta armazenamento ou o recurso foi desativado.',
	'auth/invalid-claims':
		'Os atributos de cadastro personalizado são inválidos.',
	'auth/claims-too-large':
		'A solicitação excede o tamanho máximo permitido de 1 Megabyte.',
	'auth/id-token-expired': 'O token informado expirou.',
	'auth/id-token-revoked': 'O token informado foi revogado.',
	'auth/invalid-argument':
		'Foi fornecido um argumento inválido para o método.',
	'auth/invalid-creation-time':
		'O horário de criação deve ser uma data UTC válida.',
	'auth/invalid-disabled-field':
		'A propriedade de desabilitação do usuário é inválida.',
	'auth/invalid-display-name': 'O nome do usuário fornecido é inválido.',
	'auth/invalid-email-verified': 'O e-mail fornecido é inválido.',
	'auth/invalid-hash-algorithm':
		'O algoritmo de hash fornecido não é compatível.',
	'auth/invalid-hash-block-size':
		'O tamanho do bloco de hash fornecido é inválido.',
	'auth/invalid-hash-derived-key-length':
		'O comprimento da chave derivada do hash fornecido é inválido.',
	'auth/invalid-hash-key':
		'A chave de hash deve ser um buffer de bytes válido.',
	'auth/invalid-hash-memory-cost':
		'O custo de memória do hash fornecido é inválido.',
	'auth/invalid-hash-parallelization':
		'A paralelização do hash fornecida é inválida.',
	'auth/invalid-hash-rounds':
		'O número de rodadas de hash fornecido é inválido.',
	'auth/invalid-hash-salt-separator':
		'O separador de salt do hash deve ser um buffer de bytes válido.',
	'auth/invalid-id-token': 'O token de identificação fornecido é inválido.',
	'auth/invalid-last-sign-in-time':
		'O horário do último login deve ser uma data UTC válida.',
	'auth/invalid-page-token': 'O token da página fornecido é inválido.',
	'auth/invalid-password':
		'A senha fornecida é inválida. Ela deve ter pelo menos 6 caracteres.',
	'auth/invalid-password-hash': 'O hash da senha fornecida é inválido.',
	'auth/invalid-password-salt': 'O salt da senha fornecida é inválido.',
	'auth/invalid-photo-url': 'A URL da foto de perfil fornecida é inválida.',
	'auth/invalid-provider-id':
		'O identificador do provedor fornecido é inválido.',
	'auth/invalid-session-cookie-duration':
		'A duração do cookie da sessão deve ser um número válido em milissegundos, entre 5 minutos e 2 semanas.',
	'auth/invalid-uid':
		'O identificador fornecido deve ter no máximo 128 caracteres.',
	'auth/invalid-user-import':
		'O registro do usuário a ser importado é inválido.',
	'auth/invalid-provider-data':
		'Os dados do provedor fornecido são inválidos.',
	'auth/maximum-user-count-exceeded':
		'O número máximo permitido de usuários a serem importados foi excedido.',
	'auth/missing-hash-algorithm':
		'É necessário fornecer um algoritmo de hash e seus parâmetros para importar usuários.',
	'auth/missing-uid':
		'Um identificador é necessário para realizar esta operação.',
	'auth/reserved-claims':
		'Uma ou mais propriedades personalizadas fornecidas usam palavras reservadas.',
	'auth/session-cookie-revoked': 'O cookie da sessão foi revogado.',
	'auth/uid-already-exists': 'O identificador fornecido já está em uso.',
	'auth/email-already-exists': 'O e-mail fornecido já está em uso.',
	'auth/phone-number-already-exists':
		'O número de telefone fornecido já está em uso.',
	'auth/project-not-found':
		'Nenhum projeto foi encontrado com a chave fornecida.',
	'auth/insufficient-permission':
		'A credencial fornecida não tem permissão para acessar o recurso solicitado.',
	'auth/internal-error':
		'O servidor de autenticação encontrou um erro inesperado ao processar a solicitação.',
};

export type Code = keyof typeof errors;
`;
