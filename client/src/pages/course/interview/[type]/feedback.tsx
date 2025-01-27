import { TaskDtoTypeEnum } from 'api';
import { SessionProvider, ActiveCourseProvider } from 'modules/Course/contexts';
import { Feedback } from 'modules/Interviews/pages/feedback';
import { InterviewFeedback } from 'modules/Interviews/pages/InterviewFeedback';
import { getServerSideProps, PageProps } from 'modules/Interviews/pages/InterviewFeedback/getServerSideProps';
import { CourseRole } from 'services/models';

export { getServerSideProps };

export default function (props: PageProps) {
  return (
    <ActiveCourseProvider>
      <SessionProvider allowedRoles={[CourseRole.Mentor]} course={props.course}>
        {props.type === TaskDtoTypeEnum.StageInterview ? <Feedback {...props} /> : <InterviewFeedback {...props} />}
      </SessionProvider>
    </ActiveCourseProvider>
  );
}
