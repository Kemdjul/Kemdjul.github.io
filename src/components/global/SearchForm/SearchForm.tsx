import Search from "~/assets/svg/Search";
import styles from "./SearchForm.module.scss";
import { TextInput } from "@mantine/core";

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={<Search />}
        leftSectionWidth={28}
        placeholder="Pretraži..."
        classNames={{
          root: styles.searchRoot,
        }}
      />
    </form>
  );
};

export default SearchForm;
