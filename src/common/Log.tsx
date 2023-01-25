import log from 'loglevel';

export const errorLog=(error: any)=>{
	log.error(error.message);
}

export const warnLog=()=>{
	log.warn("This is warn");
}

export const infoLog=(info: any)=>{
	log.info(`This is info ${info}`);
}