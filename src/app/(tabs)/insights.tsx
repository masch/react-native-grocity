import ClearCompletedButton from '@/components/insights/ClearCompletedButton'
import InsightsCategorySection from '@/components/insights/InsightsCategorySection'
import InsightsPrioritySection from '@/components/insights/InsightsPrioritySection'
import InsightsStatsSection from '@/components/insights/InsightsStatsSection'
import UserProfile from '@/components/insights/UserProfile'
import TabScreenBackground from '@/components/TabsScreenBackground'
import { ScrollView } from 'react-native'

const InsightsScreen = () => {
    return (
        <ScrollView
            className='flex-1 bg-background py-4'
            contentContainerStyle={{ padding: 20, gap: 14 }}
            showsVerticalScrollIndicator={false}
            contentInsetAdjustmentBehavior='automatic'
        >
            <TabScreenBackground />
            <UserProfile />
            <InsightsStatsSection />
            <InsightsCategorySection />
            <InsightsPrioritySection />
            <ClearCompletedButton />
        </ScrollView>
    )
}

export default InsightsScreen