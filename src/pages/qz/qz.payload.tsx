import { useQz } from '@/contexts/index.ts'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

export function QzPayload() {
	const { payloadRef } = useQz()

	return (
		<div className="w-[57mm] hidden" aria-hidden tabIndex={-1}>
			<div
				ref={payloadRef}
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					fontFamily: 'helvetica',
				}}
			>
				<img src="/sapta_full.png" width={150}/>
				<p
					style={{
						fontWeight: 'bold',
						fontFamily: 'Helvetica-Bold',
						fontSize: '10px',
						marginTop: '13px'
					}}
				>
					{dayjs().locale('id').format('dddd, DD MMMM YYYY • HH:mm:ss')}
				</p>
				<p style={{}}>Nomor Antrian</p>
				<p
					style={{
						fontWeight: '800',
						fontSize: '68px',
						marginBottom: '0.5rem',
						marginTop: '0',
					}}
				>
					A029
				</p>
				<p
					style={{
						fontWeight: 'bold',
						marginBottom: '0.25rem',
						fontSize: '14px',
					}}
				>
					Pasien Terdaftar
				</p>
				<p
					style={{
						whiteSpace: 'pre-wrap',
						textAlign: 'center',
						fontSize: '10px',
					}}
				>
					Nomor antrian anda akan kami panggil sebanyak 2x sebelum kami
					memanggil nomor antrian berikutnya. Jika antrian terlewat, Anda harus
					mengambil nomor antrian baru.
				</p>
			</div>
		</div>
	)
}
