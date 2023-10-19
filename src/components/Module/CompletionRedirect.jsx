function getCompletionRedirectURL(fromParam) {
  if (fromParam === 'decisiontree') {
    return '/decisiontree';
  }
  if (fromParam === 'overview') {
    return '/overview';
  }
  if (fromParam === 'beginner-course') {
    return '/course-beginner-end';
  }
  if (fromParam === 'advanced-course') {
    return '/course-advanced-end';
  }
  if (fromParam === 'expert-course') {
    return '/course-expert-end';
  }
  return '/';
}

export default getCompletionRedirectURL;
