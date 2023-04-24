import { dataBannerWithSlider, paramsFade } from '@crdr/fakedata'

import { MySwiper } from '@crdr/plugins'
import { Container } from '@crdr/ui'

import { BannerSliderBg } from './BannerSliderBg/BannerSliderBg'
import { BannerSliderContent } from './BannerSliderContent/BannerSliderContent'

import styles from './banner-with-slider.module.scss'

export const BannerWithSlider = () => {

	return (
		<Container
			width="full"
			align="stretch"
			className={styles.component}
			tag="section"
		>
			<MySwiper params={paramsFade} arrowSize="large">
				{dataBannerWithSlider.map((slider, idx) =>
					<div className={styles.container} key={idx}>
						<BannerSliderBg
							src={slider.bgImage.src}
							alt={slider.bgImage.alt}
						/>
						<BannerSliderContent
							title={slider.title}
							href={slider.href}
							variant={slider.position}
							discount={slider.discountPercentage}
						/>
					</div>
				)}
			</MySwiper>
		</Container>
	)
}
