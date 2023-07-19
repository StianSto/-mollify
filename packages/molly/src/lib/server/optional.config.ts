let OPENAI_API_KEY = '';
let OPENAI_TOKEN_LIMIT = '1000';
let ELEVENLABS_API_KEY = '';

if (process.env.OPENAI_API_KEY) {
	OPENAI_API_KEY = process.env.OPENAI_API_KEY;
}

if (process.env.OPENAI_TOKEN_LIMIT) {
	OPENAI_TOKEN_LIMIT = process.env.OPENAI_TOKEN_LIMIT;
}

if (process.env.ELEVENLABS_API_KEY) {
	ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
}

export { OPENAI_API_KEY, OPENAI_TOKEN_LIMIT, ELEVENLABS_API_KEY };
