import 'swiper/css';
import BusinessMainBanner from 'components/buisnrss/main-banner';
import ConditionsBusiness from 'components/buisnrss/conditions-business';
import CalculatorSection from 'components/buisnrss/loan-calculator';
import RequirementsBusiness from 'components/buisnrss/business-requirements';
import GetLoanBusiness from 'components/buisnrss/get-a-loan';
import BorrowerBusiness from 'components/buisnrss/conditions-borrower';

const BusinessPage = () => {
    return (
        <>
            <BusinessMainBanner />
            <ConditionsBusiness />
            <CalculatorSection />
            <RequirementsBusiness />
            <GetLoanBusiness />
            <BorrowerBusiness />
        </>
    );
};

export default BusinessPage;
