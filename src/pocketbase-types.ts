/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agents = "agents",
	MaisonsListe = "maisonsListe",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgentsRecord = {
	email?: string
	nom?: string
	prenom?: string
	telephone?: number
}

export type MaisonsListeRecord = {
	adresse?: string
	favori?: boolean
	images?: string
	nbChambres?: number
	nbSdB?: number
	nomMaison?: string
	prix?: number
	surface?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AgentsResponse<Texpand = unknown> = Required<AgentsRecord> & BaseSystemFields<Texpand>
export type MaisonsListeResponse<Texpand = unknown> = Required<MaisonsListeRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	agents: AgentsRecord
	maisonsListe: MaisonsListeRecord
	users: UsersRecord
}

export type CollectionResponses = {
	agents: AgentsResponse
	maisonsListe: MaisonsListeResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'agents'): RecordService<AgentsResponse>
	collection(idOrName: 'maisonsListe'): RecordService<MaisonsListeResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
